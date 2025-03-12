// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract medichain{
    struct drugDeets{
        bytes32 drugID;
        string drugName;
        string manfDate;
        string expDate;
        string manfName;
        string manfLicense;
    }
    mapping(bytes32 => drugDeets) private drugs;
    event drugFound(string drugName, string expDate, string manfName, string manfLicense);
    event drugAdded(string drugName, bytes32 drugID);


    function checkDrug( bytes32  _drugID) public  returns (bool){
        if(drugs[_drugID].drugID != _drugID){
            
            return false;
        }
        else{
            emit drugFound(drugs[_drugID].drugName, drugs[_drugID].expDate, drugs[_drugID].manfName, drugs[_drugID].manfLicense);
            return true;
        }
    }
    function addDrug( string memory _drugName ,string memory _manfDate ,string memory _expDate,string memory _manfName, string memory _manfLicense ) public returns(bytes32){
        bytes32 _drugID = keccak256(abi.encodePacked(_drugName));
            drugs[_drugID] = drugDeets({drugID: _drugID, drugName: _drugName , manfDate : _manfDate ,expDate: _expDate,manfName: _manfName,manfLicense : _manfLicense});
            emit drugAdded(_drugName,_drugID);
            return _drugID;
    }

    
}