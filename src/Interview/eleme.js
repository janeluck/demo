const keyText = ['captain', 'widow', 'iron-man', 'ant-man']

const htmlStr = '<div>iiio udadna sdkasd <p> captain </p><div>89qw easd iron-man</div></div>'
function wrapText(str, arr){

    const regex = new RegExp('(' + arr.join('|') + ')', 'g')

    return str.replace(regex, '<b>$1</b>')


}

console.log(wrapText(htmlStr, keyText))