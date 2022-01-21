const { execSync } = require('child_process');
const { inc, prerelease } = require('semver');

function createPullRequest(target, message) {
  execSync(`hub pull-request -b ${target} -l release -m "${message}"`, {
    stdio: 'inherit',
  });
}

function updateOrigin() {
  execSync('git fetch --all --quiet', {
    stdio: 'inherit',
  });
}

function getCurrentBranch() {
  return execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
}

function pushBranch(name) {
  execSync(`git push --set-upstream origin ${name}`, {
    stdio: 'inherit',
  });
}

function pushTag(tag) {
  execSync(`git push origin "${tag}"`, {
    stdio: 'inherit',
  });
}

function checkoutBranch(currentBranch) {
  execSync(`git checkout ${currentBranch}`, {
    stdio: 'inherit',
  });
}

function createBranch(name, origin) {
  execSync(`git checkout -b ${name} origin/${origin} --quiet`, {
    stdio: 'inherit',
  });
}

function getDate() {
  const date = new Date();
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, '0'),
    String(date.getDate()).padStart(2, '0'),
  ].join('-');
}

function isWorkingDirectoryClean() {
  const output = execSync('git diff-index HEAD | wc -l');
  return Number(output.toString()) === 0;
}

const VersionBumpTypes = {
  PreMinor: 'PreMinor',
  Minor: 'Minor',
  Patch: 'Patch',
};

function getNewVersion(version, type = VersionBumpTypes.PreMinor) {
  switch (type) {
    case VersionBumpTypes.PreMinor:
      if (prerelease(version)) {
        return inc(version, 'prerelease');
      }
      return inc(version, 'preminor');
    case VersionBumpTypes.Minor:
      return inc(version, 'minor');
    case VersionBumpTypes.Patch:
      return inc(version, 'patch');
    default:
      throw new Error('Invalid bump type');
  }
}

function updateVersion(newVersion) {
  execSync(`yarn version --new-version ${newVersion}`, {
    stdio: 'inherit',
  });

  console.log('📱 Increasing iOs version...');
  execSync('./scripts/version-ios.sh', {
    stdio: 'inherit',
  });

  return newVersion;
}

module.exports = {
  createPullRequest,
  updateOrigin,
  getCurrentBranch,
  pushBranch,
  pushTag,
  checkoutBranch,
  createBranch,
  getDate,
  isWorkingDirectoryClean,
  VersionBumpTypes,
  getNewVersion,
  updateVersion,
};
