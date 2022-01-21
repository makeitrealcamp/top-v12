// Requirements:
// * git
// * node
// * yarn
// * hub
// This follows `docs/deployment-strategy.md` on the backend repo

const {
  createPullRequest,
  updateOrigin,
  getCurrentBranch,
  pushBranch,
  pushTag,
  checkoutBranch,
  createBranch,
  getDate,
  isWorkingDirectoryClean,
  getNewVersion,
  updateVersion,
  VersionBumpTypes,
} = require('./gitUtils');
const readline = require('readline');

const DEV_BRANCH = 'develop';
const PROD_BRANCH = 'master';

const PROD_RELEASE = 'PROD_RELEASE';
const PROD_HOTFIX = 'PROD_HOTFIX';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.clear();
rl.question(
  `
  What type of release would you like to do?
  1. Release to Prod from Develop.
  2. Hotfix to Prod from current branch.
  `,
  (option) => {
    console.clear();
    rl.close();
    try {
      const releaseType = {
        1: PROD_RELEASE,
        2: PROD_HOTFIX,
      }[option];

      if (!releaseType) {
        throw new Error('Invalid option');
      }

      console.log('💩 Verifying that the working directory is clean...');
      const isClean = isWorkingDirectoryClean();
      if (!isClean) {
        throw new Error(
          '💩 Working directory is not clean. Stash your changes and try again.',
        );
      }

      console.log('🌏 Updating origin...');
      updateOrigin();

      console.log(
        '📸 Recording current branch, so we can leave the repository at the same branch after the script finishes. :)',
      );
      const currentBranch = getCurrentBranch();

      const releaseConfig = {
        [PROD_RELEASE]: {
          prefix: 'prod-release',
          origin: DEV_BRANCH,
          bumpType: VersionBumpTypes.Minor,
        },
        [PROD_HOTFIX]: {
          prefix: 'prod-hotfix',
          origin: currentBranch,
          bumpType: VersionBumpTypes.Patch,
        },
      }[releaseType];

      console.log('🌵 Creating release branch from origin...');
      const branchName = `${releaseConfig.prefix}-${getDate()}`;
      createBranch(branchName, releaseConfig.origin);

      console.log(
        '👊 Creating a commit bumping the version and creating the version tag...',
      );
      const { version } = require('../package');
      const newVersion = getNewVersion(version, releaseConfig.bumpType);
      updateVersion(newVersion);

      console.log(`🤜 Pushing ${releaseConfig.prefix} branch...`);
      pushBranch(branchName);

      console.log(`🏷  Pushing ${releaseConfig.prefix} tag...`);
      pushTag(`Web-v${newVersion}`);

      if (releaseType === PROD_RELEASE || releaseType === PROD_HOTFIX) {
        createProdPullRequests(newVersion);
      }

      console.log('👈 Going back to the previous branch');
      checkoutBranch(currentBranch);
    } catch (e) {
      console.error(e);
    } finally {
      process.exit(0);
    }
  },
);

function createProdPullRequests(version) {
  createPullRequest(PROD_BRANCH, `Release to production - v${version}`);
  createPullRequest(
    DEV_BRANCH,
    `Update development branch with release to production - v${version}`,
  );
}
