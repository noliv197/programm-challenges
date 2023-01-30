function toCamelCase(str){
    let template
    if (str.includes('-') || str.includes('_')){
        template = str.split(/[-_]+/)
    } else{
        return ''
    }
    return template.map(word=> {
        if(template[0] === word){
            return word
        }else{
            return word[0].toUpperCase()+word.slice(1)
        }
    }).join('')
}

console.log(toCamelCase('The_Stealth_Warrior'))