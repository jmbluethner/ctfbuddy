export function log(str,type = 'info') {

    const prefix = "CTFBuddy"

    let date = new Date();
    date = date.toLocaleTimeString();

    if(type === 'info') {
        console.log("%c " + date + " %c" + prefix + " > %c" + " " + str,"background: #4573ff; color: rgb(160,160,160)","background: #4573ff; color: white; font-weight: bolder;"," background: transparent: color: inherit;");
    } else if(type === 'warning') {
        console.log("%c " + date + " %c" + prefix + " > %c" + " " + str,"background: #e1821e; color: rgb(160,160,160)","background: #e1821e; color: white; font-weight: bolder;"," background: transparent: color: inherit;");
    } else if(type === 'success') {
        console.log("%c " + date + " %c" + prefix + " > %c" + " " + str,"background: #25ad19; color: rgb(160,160,160)","background: #25ad19; color: white; font-weight: bolder;"," background: transparent: color: inherit;");
    } else if(type === 'error') {
        console.log("%c " + date + " %c" + prefix + " > %c" + " " + str,"background: #EF3B1C; color: rgb(160,160,160)","background: #EF3B1C; color: white; font-weight: bolder;"," background: transparent: color: inherit;");
    }

}