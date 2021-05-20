export class PdfTypeNames{
  static getName(type:number){
    let name=null;
    switch(type){
      case 0 : name ='Angebot'; break;
      case 1 : name ='Bestätigung'; break;
      case 2 : name ='Rechnung'; break;
      case 3 : name ='Lieferschein'; break;
    }
    return name //is null when a invalid id is used
  }
}
