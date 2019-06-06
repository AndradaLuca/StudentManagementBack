//
//  StudentGradesViewController.swift
//  StudentManagement
//
//  Created by Radu Tothazan on 29/05/2019.
//  Copyright © 2019 radu. All rights reserved.
//

import UIKit

class StudentGradesViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {

    @IBOutlet weak var tableView: UITableView!
    var students: [Student] = []
    var studentGrades: [StudentGrade] = []
    
    override func viewDidLoad() {
        super.viewDidLoad()
        ApiManager.getAllStudents { (students) in
            if let students = students {
                self.students = students
                ApiManager.getAllGrades(completion: { (studentGrades) in
                    if let studentGrades = studentGrades {
                        self.studentGrades = studentGrades
                        self.tableView.reloadData()
                    }
                })
            }
        }
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.studentGrades.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "StudentTableViewCell", for: indexPath) as! StudentTableViewCell
        for student in students {
            if studentGrades[indexPath.row].idStudent == student.id {
                cell.name.text = student.email
                cell.grade.text = "\(studentGrades[indexPath.row].idGradeSubject)"
                break
            }
        }
        return cell
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let student = self.students[indexPath.row]
        let message = "nume: \(student.email)\nan studiu: \(student.anStudiu)\ncnp: \(student.cnp)"
        let alert = UIAlertController(title: "Detalii student", message: message, preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: "Cancel", style: .cancel, handler: nil))
        self.present(alert, animated: true, completion: nil)
    }
    
    @IBAction func logoutTapped(_ sender: UIBarButtonItem) {
        UserDefaults.standard.removeObject(forKey: tokenKey)
        let nextVC = self.storyboard?.instantiateViewController(withIdentifier: loginNavigationId) as? UINavigationController ?? UINavigationController()
        self.present(nextVC, animated: true, completion: nil)
    }
}
