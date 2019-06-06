//
//  ApiManager.swift
//  StudentManagement
//
//  Created by Radu Tothazan on 08/05/2019.
//  Copyright © 2019 radu. All rights reserved.
//

import Foundation
import Alamofire
import AlamofireObjectMapper

class ApiManager {
    
    static func login(email: String, password: String, completion: @escaping (Bool) -> ()) {
        
        let headers: [String: String] = ["Content-Type": "application/json"]
        let requestUrl = baseUrl + "/user/findByEmail&Password"
        let params: Parameters = ["email": email, "password": password]
        
        Alamofire.request(requestUrl, method: .post, parameters: params, encoding: JSONEncoding.default, headers: headers).responseJSON { (response) in
            if let _ = response.result.value as? NSDictionary {
                UserDefaults.standard.set(email, forKey: tokenKey)
                completion(true)
            } else {
                completion(false)
            }
        }
    }
    
    static func getAllStudents(completion: @escaping ([Student]?) -> ()) {
        
        let headers: [String: String] = ["Content-Type": "application/json"]
        let requestUrl = baseUrl + "/student/all"
        
        Alamofire.request(requestUrl, method: .get, parameters: nil, encoding: JSONEncoding.default, headers: headers).responseArray(completionHandler: { (response: DataResponse<[Student]>) in
            if let statusCode = response.response?.statusCode {
                if statusCode == 200 {
                    completion(response.result.value ?? [])
                } else {
                    completion(nil)
                }
            } else {
                completion(nil)
            }
        })
    }
    
    static func getAllGrades(completion: @escaping ([StudentGrade]?) -> ()) {
        
        let headers: [String: String] = ["Content-Type": "application/json"]
        let requestUrl = baseUrl + "/studentGrade/all"
        
        Alamofire.request(requestUrl, method: .get, parameters: nil, encoding: JSONEncoding.default, headers: headers).responseArray { (response: DataResponse<[StudentGrade]>) in
            if let statusCode = response.response?.statusCode {
                if statusCode == 200 {
                    completion(response.result.value ?? [])
                } else {
                    completion(nil)
                }
            } else {
                completion(nil)
            }
        }
    }
    
    static func addStudentGrade(idStudent: Int64, grade: String, idProfesor: Int, completion: @escaping (Bool) -> ()) {
        
        let headers: [String: String] = ["Content-Type": "application/json"]
        let requestUrl = baseUrl + "/studentGrade/addGrade"
        let params: Parameters = ["student": "\(idStudent)", "grade": grade, "profesor": idProfesor]
        
        Alamofire.request(requestUrl, method: .post, parameters: params, encoding: URLEncoding.default, headers: headers).responseJSON { (response) in
            if let _ = response.result.value as? NSDictionary {
                completion(true)
            } else {
                completion(false)
            }
        }
    }
    
    static func addGroup(name: String, completion: @escaping (Bool) -> ()) {
        
        let headers: [String: String] = ["Content-Type": "application/json"]
        let requestUrl = baseUrl + "/grup/addOrUpdate"
        let params: Parameters = ["denumire": name]
        
        Alamofire.request(requestUrl, method: .post, parameters: params, encoding: JSONEncoding.default, headers: headers).responseJSON { (response) in
            if let _ = response.result.value as? NSDictionary {
                completion(true)
            } else {
                completion(false)
            }
        }
    }
    
    static func getGroups(completion: @escaping ([Group]?) -> ()) {
        
        let headers: [String: String] = ["Content-Type": "application/json"]
        let requestUrl = baseUrl + "/grup/all"
        
        Alamofire.request(requestUrl, method: .get, parameters: nil, encoding: JSONEncoding.default, headers: headers).responseArray(completionHandler: { (response: DataResponse<[Group]>) in
            if let statusCode = response.response?.statusCode {
                if statusCode == 200 {
                    completion(response.result.value ?? [])
                } else {
                    completion(nil)
                }
            } else {
                completion(nil)
            }
        })
    }
}
