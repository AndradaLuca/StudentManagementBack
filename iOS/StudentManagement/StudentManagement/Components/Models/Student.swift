//
//  Student.swift
//  StudentManagement
//
//  Created by Radu Tothazan on 30/05/2019.
//  Copyright © 2019 radu. All rights reserved.
//

import Foundation
import ObjectMapper

class Student: Mappable {
    
    var id: Int64 = 0
    var email: String = ""
    var idGroup: String = ""
    var anStudiu: String = ""
    var telefon: String = ""
    var cnp: String = ""
    
    required init?(map: Map) {}
    
    init() {}
    
    func mapping(map: Map) {
        self.id <- map["idStudent"]
        self.email <- map["email"]
        self.idGroup <- map["idgroup"]
        self.anStudiu <- map["anstudiu"]
        self.telefon <- map["telefon"]
        self.cnp <- map["cnp"]
    }
}
