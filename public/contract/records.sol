// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7;

contract Records{
    struct studentDetails{
        string name;
        string rollNo;
        string class;
        string div;
        string dob;
        string faculty;
        string email;
        string mobNo;
        string city;
    }
    mapping(address => mapping(uint => studentDetails)) public studentsRecords;
    
    //function will get student details from web page
    function setDetails(uint _grNo, string memory _name, string memory _rollNo, string memory _class, string memory _div, string memory _dob, string memory _faculty, string memory _email, string memory _mobNo, string memory _city) public {
        studentsRecords[msg.sender][_grNo].name = _name;
        studentsRecords[msg.sender][_grNo].rollNo = _rollNo;
        studentsRecords[msg.sender][_grNo].class = _class;
        studentsRecords[msg.sender][_grNo].div = _div;
        studentsRecords[msg.sender][_grNo].dob = _dob;
        studentsRecords[msg.sender][_grNo].faculty =_faculty;
        studentsRecords[msg.sender][_grNo].email = _email;
        studentsRecords[msg.sender][_grNo].mobNo = _mobNo;
        studentsRecords[msg.sender][_grNo].city = _city;
    }
    //function will send details to web page
    function viewDetails(uint _grNo) public view returns(string memory, string memory, string memory, string memory, string memory){
       string memory name = studentsRecords[msg.sender][_grNo].name;
       string memory rollNo = studentsRecords[msg.sender][_grNo].rollNo;
       string memory class = studentsRecords[msg.sender][_grNo].class;
       string memory div = studentsRecords[msg.sender][_grNo].div;
       string memory dob = studentsRecords[msg.sender][_grNo].dob;
       return (name,rollNo,class,div,dob);
    }
     function viewDetailsContacts(uint _grNo) public view returns(string memory, string memory, string memory, string memory){
       string memory faculty = studentsRecords[msg.sender][_grNo].faculty;
       string memory email = studentsRecords[msg.sender][_grNo].email;
       string memory mobNo = studentsRecords[msg.sender][_grNo].mobNo;
       string memory city = studentsRecords[msg.sender][_grNo].city;
       return (faculty,email,mobNo,city);
    }
}