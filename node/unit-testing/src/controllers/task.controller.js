const Task = require("../models/task.model");

module.exports = {
  async list(req, res) {
    try {
      const { user } = req;
      const tasks = await Task.find({ user });

      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async create(req, res) {
    try {
      const { body, user } = req;
      const task = await Task.create({ ...body, user });

      res.status(200).json(task);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async show(req, res) {
    try {
      const {
        params: { id },
        user,
      } = req;
      const task = await Task.findOne({ _id: id, user });

      if (!task) throw Error("You are not allowed");

      res.status(200).json(task);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async update(req, res) {
    try {
      const {
        params: { id },
        user,
      } = req;

      const task = await Task.findOne({ _id: id, user });

      if (!task) throw Error("You are not allowed");

      task.done = !task.done;
      await task.save();

      res.status(200).json(task);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async delete(req, res) {
    try {
      const {
        params: { id },
        user,
      } = req;
      const task = await Task.deleteOne({ _id: id, user });

      if (!task.deletedCount) throw Error("You are not allowed");

      res.status(200).json({ message: "Task deleted" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
