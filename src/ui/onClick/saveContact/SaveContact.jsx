export const SaveContact = ({ name, phone, email, website }) => {

    /* create the vcard */
    const vcard = "BEGIN:VCARD\nVERSION:4.0\nFN:" + name + "\nTEL;TYPE=work,voice:" + phone + "\nEMAIL:" + email + "\nURL:" + website + "\nEND:VCARD"
    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    /* create link */
    const newLink = document.createElement('a');
    newLink.download = name + ".vcf";
    newLink.textContent = name;
    newLink.href = url;

    newLink.click();
}