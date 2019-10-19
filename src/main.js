let html = document.querySelector("#html")
let style = document.querySelector("#style")

let = string = `
/*你好
我是一名前端新人
下面我要加样式了(装X了)*/

body{
    color: rgba(10,128,90,10);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    /*字体*/
    font-family: -apple-system, BlinkMacSystemFont, 'Microsoft YaHei', sans-serif;
    font-weight:800;
    /*字号*/
    font-size: 20px;
    /*行距*/
    line-height: 1.55; 
}
/*接下来我演示一下我的前端功底
首先我要准备一个div*/

#div2{
    position: fixed;
    border:1px solid red;
    width:200px;
    height:200px;
    right:10%;
    top:15%;
}
/*我要将做一个太极图
太极图中有阴阳鱼
我先要将div变成圆*/
@media (max-width:500px){
    #html{
        height:50vh;
        overflow:auto;
     } 
    #divWrapper{
        height:50vh; 
    }
    #div2{
        position:relative;
        bottom:50%;
        left:50%;
        transform: translateX(-50%);
    }
}
#div2{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
    background: linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(34,193,195,1) 48%, rgba(253,187,45,1) 52%, rgba(253,187,45,1) 100%);
    
}
/*接下来我要加两个阵眼*/
#div2::before{
    content:'';
    display:block;
    width:100px;
    height:100px;
    border-radius:50%;
    top:0;
    left:50%;
    transform:translateX(-50%);
    position:absolute;
    background:rgba(253,187,45,1);
    background: radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(34,193,195,1) 20%, rgba(253,187,45,1) 20%, rgba(253,187,45,1) 100%);
    
}
#div2::after{
    content:'';
    display:block;
    width:100px;
    height:100px;
    border-radius:50%;
    position:absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:rgba(34,193,195,1);
    background: radial-gradient(circle, rgba(253,187,45,1) 0%, rgba(253,187,45,1) 20%, rgba(34,193,195,1) 20%, rgba(34,193,195,1) 100%);
}
`
let n = 0
let string_print = ''
let string_parint2 = ''
let print = () => {
    setTimeout(() => {
        if (n < string.length - 1) {
            print()
        }
        if (string[n] === '\n') {

            string_print += "<br>"
            string_parint2 += '\n'

        } else if (string[n] === ' ') {
            string_print += "&nbsp"
            string_parint2 += ' '
        }
        string_print += string[n]
        html.innerHTML = string_print
        style.innerHTML = string.substring(0, n + 1)
        window.scrollTo(0, 99999)
        html.scrollTo(0,99999)
        n += 1;
    }, 500)
}
print()
