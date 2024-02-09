import requests
from bs4 import BeautifulSoup
import csv 

def scrapeDoctorsInfo(specialty, wilaya, page):
    url = "https://sihhatech.com/etablissements?speciality={specialty}&wilaya={wilaya}&page={page}".format(specialty=specialty, wilaya=wilaya, page=page)
    response = requests.get(url)
    with open("response.html", "w", encoding="utf-8") as file:
        file.write(response.text)  
    htmlSoup = BeautifulSoup(response.text, "html.parser")
    wilayaId = str(wilaya)
    doctors = []

    articles =  htmlSoup.findAll("article", attrs={"class": "etablissement__inlist"})
    if len(articles) == 0:
        print("No Results for speciality: {specialty}, wilaya: {wilaya}, page: {page}".format(specialty=specialty, wilaya=wilaya, page=page))
        return

    for article in articles:

        content = article.find("div" , attrs= {"class": "content"})

        fullNameEn = ""
        fullNameAr = ""
        workTime = ""
        specialties = ""
        city = ""
        wilaya = ""
        address = ""
        email = ""
        phoneNumber1 = ""
        phoneNumber2 = ""

        # Name:
        for aTag in content.findAll("a"):
            detailsLink = aTag["href"]
            fullNameEn = aTag.contents[0].replace("\n", "").strip()
            fullNameAr = aTag.contents[2].replace("\n", "").strip()
            
        #Work Time:
        for p in content.findAll("p"):
            workTime = p.text
            
            
        
        # Address / Services
        for address in article.findAll("address"):
            
            # Services
            specialties = address.find("h5").text

            # city, wilaya
            address1 = address.findAll("h5")[1].text
            splitedAddress1 =  address1.split(",")
            city = splitedAddress1[0].strip()
            wilaya = splitedAddress1[1].strip()
            address2 = address.find("p").text
            

        # Scraping Details Page to get Phone Numbers
        detailsHtmlSoup = BeautifulSoup(requests.get(detailsLink).text, "html.parser")
        for phoneNumberDiv in detailsHtmlSoup.findAll("div" , attrs={"class": "etablissement-phones"}):
            phoneNumbers = phoneNumberDiv.findAll("a")
            if len(phoneNumbers) > 0:   
                phoneNumber1 = phoneNumberDiv.findAll("a")[0].text
            if len(phoneNumbers) > 1:
                phoneNumber2 = phoneNumberDiv.findAll("a")[1].text
        
        email = detailsHtmlSoup.find("a",attrs={"class":"underline"})
        email = email.text if email else ""
        


        doctors.append({
            "fullNameEn": fullNameEn,
            "fullNameAr": fullNameAr,
            "workTime": workTime,
            "specialties": specialties,
            "wilaya": wilaya,
            "city": city,
            "email": email,
            "address": address2,
            "phoneNumber1": phoneNumber1,
            "phoneNumber2": phoneNumber2
        })

    return doctors


# Writing Headers to the CSV file
csvColunms = ["fullNameEn" , "fullNameAr" , "workTime" , "specialties" , "wilaya" , "city" , "email" , "address" ,"phoneNumber1" , "phoneNumber2"]
csvFile = "doctors.csv"
# try:
#     with open(csvFile , "w"  , encoding="UTF-8") as file:
#         writer = csv.DictWriter(file,fieldnames=csvColunms )
#         writer.writeheader()
# except IOError:
#     print("I/O error")

for speciality in range(99, 160):
    print ("Scraping Speciality: ", speciality)
    for wilaya in range(16, 17):
        print ("Scraping Wilaya: ", wilaya)
        for page in range(1, 100):
            print ("Scraping Page: ", page)
            doctors = scrapeDoctorsInfo(speciality, wilaya, page)
            if doctors:
                pass
                #Writing to CSV file
                try:
                    with open(csvFile , "a"  , encoding="UTF-8") as file:
                        writer = csv.DictWriter(file,fieldnames=csvColunms )
                        for doctor in doctors:
                            writer.writerow(doctor)
                except IOError:
                    print("I/O error")
            else: 
                break










        




