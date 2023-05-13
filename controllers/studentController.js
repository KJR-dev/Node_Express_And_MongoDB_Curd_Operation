import studentModel from "../models/students.js";
class StudentController {
  static getAllData = async (req, res) => {
    try {
      const result = await studentModel.find();
      res.render("index", { data: result });
    } catch (error) {
      console.log(error);
    }
  };
  static createData = async (req, res) => {
    try {
      const { name, age, fees } = req.body;
      const data = new studentModel({
        name: name,
        age: age,
        fees: fees,
      });
      // save the data in the mongoDB
      const result = await data.save();
      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  };
  static dataEdit = async (req, res) => {
    try {
      const result = await studentModel.findById(req.params.id);
      console.log('3');
      res.render("edit", { data: result });
    } catch (error) {
      console.log(error);
    }
  };
  static dataUpdate = async (req, res) => {
    try {
      console.log(req.params.id)
      const result=await studentModel.findByIdAndUpdate(req.params.id, req.body);  
      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  };
  static dataDelete = async (req, res) => {
    try {
      const result=await studentModel.findByIdAndDelete(req.params.id);
      console.log(result);
      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }

  };
}

export default StudentController;
