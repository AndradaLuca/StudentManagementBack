//
//  StudentGrade.swift
//  StudentManagement
//
//  Created by Radu Tothazan on 30/05/2019.
//  Copyright © 2019 radu. All rights reserved.
//

import Foundation
import ObjectMapper

class StudentGrade: Mappable {
    
    var id: Int64 = 0
    var idStudent: Int = 0
    var idGradeSubject: Int = 0
    
    required init?(map: Map) {}
    
    init() {}
    
    func mapping(map: Map) {
        self.id <- map["id"]
        self.idStudent <- map["idstudent"]
        self.idGradeSubject <- map["idgradesubject"]
    }
}
