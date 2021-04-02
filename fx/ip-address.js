/*
function has 1 input parameter IP Address
IP Address argument does not have boundary like min-, min, min+, nom, max-, max, max+
so, it can has special values (blank, malformed, alphanumeric, ...)
but has equivalence class valid vs invalid

function return list with input parameter IP Address added except if it is NOT in whitelist
1. we check if an IP Address added to blocklist if it is NOT in whitelist
  (a) IP Address is NOT in whitelist
  (b) IP Address is in whitelist
if IP Address added to blocklist, ping request from specified IP to local node should end with Request Time Out by default timeout (4 seconds) with 100% packet loss

after blocking.period.seconds blocked IP address should be unblocked. 
period.seconds rule has 3 equivalence class { < seconds, seconds , > seconds }

*/

const config = {
  "blocking.enabled": true,
  "blocking.whitelist.ips": ["104.192.138.232", "113.161.82.52"],
  "blocking.period.seconds": 6000,
};

function block(ipAddress) {
  const blockList = [];
  if (blockList.includes(ipAddress) === false) {
    blockList.push(ipAddress);
  }
  return blockList;
}

const blocklist = block;
// console.log(config["blocking.enabled"]);
// console.log(config["blocking.whitelist.ips"]);
// console.log(config["blocking.period.seconds"]);
