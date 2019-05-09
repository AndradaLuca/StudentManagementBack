//
//  ApiManager.swift
//  StudentManagement
//
//  Created by Radu Tothazan on 08/05/2019.
//  Copyright © 2019 radu. All rights reserved.
//

import Foundation
import Alamofire

class ApiManager {
    
    static func login(email: String, password: String, completion: @escaping (Bool) -> ()) {
        
        let headers: [String: String] = ["Content-Type": "application/json"]
        let requestUrl = baseUrl + "/user/findByEmail&Password"
        let params: Parameters = ["email": email, "password": password]
        
        Alamofire.request(requestUrl, method: .post, parameters: params, encoding: JSONEncoding.default, headers: headers).responseJSON { (response) in
            if let _ = response.result.value as? NSDictionary {
                UserDefaults.standard.set("loggedIn", forKey: tokenKey)
                completion(true)
            } else {
                completion(false)
            }
        }
    }
}
