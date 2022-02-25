#!/usr/bin/env zx

let params = process.argv.slice(3)
let url = params[0]
let output = await $`nslookup ${url}`

// 匹配ip
let regexp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/gi
let IPList = output.stdout.match(regexp)
let matchIPList = IPList.slice(2)

for (const item of matchIPList) {
  let res = await fetch(`http://whois.pconline.com.cn/ipJson.jsp?ip=${item}&json=true`)
  if (res.status === 200) {
    // ...
  }
}
