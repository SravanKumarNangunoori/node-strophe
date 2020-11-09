const Strophe=require("strophe.js")['Strophe']

let settings={
    username:"test",
    password:"alpha",
    resource:"test",
    opened:onConnect,
    failed:onConnect,
    cloased:onConnect,
    message:onConnect,
};

var Bosh_url="https://example.com:5281/http-bind"

var test=new Strophe.Connection(Bosh_url,settings);
test.rawInput=test.rawOutput=console.log
test.connect("test@example.com","")

var onConnect= function(status){
    console.log(status);
}







// console.log(strophe.Connection.toString());