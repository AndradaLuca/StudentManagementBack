//
//  Group.swift
//  StudentManagement
//
//  Created by Radu Tothazan on 06/06/2019.
//  Copyright © 2019 radu. All rights reserved.
//

import Foundation
import ObjectMapper

class Group: Mappable {
    
    var id: Int64 = 0
    var name: String = ""
    
    required init?(map: Map) {}
    
    init() {}
    
    func mapping(map: Map) {
        self.id <- map["idgroup"]
        self.name <- map["denumire"]
    }
}
