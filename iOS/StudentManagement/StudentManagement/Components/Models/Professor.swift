//
//  Professor.swift
//  StudentManagement
//
//  Created by Radu Tothazan on 29/05/2019.
//  Copyright © 2019 radu. All rights reserved.
//

import Foundation
import ObjectMapper

class Professor: Mappable {
    
    var id: Int64 = 0
    var username: String = ""
    var firstName: String = ""
    var lastName: String = ""
    
    required init?(map: Map) {}
    
    init() {}
    
    func mapping(map: Map) {
        self.id <- map["id"]
        self.username <- map["username"]
        self.firstName <- map["firstName"]
        self.lastName <- map["lastName"]
    }
}
