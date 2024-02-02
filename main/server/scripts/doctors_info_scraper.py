import requests
from bs4 import BeautifulSoup
import csv 

def scrapeDoctorsInfo(speciality, wilaya, page):
    url = "https://sihhatech.com/"
    response = requests.get(url)
    with open("response.html", "w", encoding="utf-8") as file:
        file.write(response.text)  
    htmlSoup = BeautifulSoup(response.text, "html.parser")
    wilayaId = str(wilaya)
    doctors = []

    # articles =  htmlSoup.findAll("article", attrs={"class": "etablissement__inlist"})
    # if len(articles) == 0:
    #     print("No Results for speciality: {speciality}, wilaya: {wilaya}, page: {page}".format(speciality=speciality, wilaya=wilaya, page=page))
    #     return

    # for article in articles:

    #     content = article.find("div" , attrs= {"class": "content"})

    #     enName = ""
    #     arName = ""
    #     workTime = ""
    #     specialities = ""
    #     wilaya = ""
    #     address1 = ""
    #     address2 = ""
    #     detailsLink = ""
    #     phoneNumber1 = ""
    #     phoneNumber2 = ""

    #     # Name:
    #     for aTag in content.findAll("a"):
    #         detailsLink = aTag["href"]
    #         enName = aTag.contents[0].replace("\n", "").replace(" ", "")
    #         arName = aTag.contents[2].replace("\n", "").replace(" ", "")
        

    #     #Work Time:
    #     for p in content.findAll("p"):
    #         workTime = p.text
            
        
    #     # Address / Services
    #     for address in article.findAll("address"):
            
    #         # Services
    #         specialities = address.find("h5").text

    #         # city, wilaya
    #         address1 = address.findAll("h5")[1].text
    #         splitedAddress1 =  address1.split(",")
    #         wilaya = splitedAddress1[1].strip()
    #         address2 = address.find("p").text
            

    #     # Scraping Details Page to get Phone Numbers
    #     detailsHtmlSoup = BeautifulSoup(requests.get(detailsLink).text, "html.parser")
    #     for phoneNumberDiv in detailsHtmlSoup.findAll("div" , attrs={"class": "etablissement-phones"}):
    #         phoneNumbers = phoneNumberDiv.findAll("a")
    #         if len(phoneNumbers) > 0:   
    #             phoneNumber1 = phoneNumberDiv.findAll("a")[0].text
    #         if len(phoneNumbers) > 1:
    #             phoneNumber2 = phoneNumberDiv.findAll("a")[1].text


    #     doctors.append({
    #         "enName": enName,
    #         "arName": arName,
    #         "workTime": workTime,
    #         "specialities": specialities,
    #         "wilaya": wilaya,
    #         "wilayaId": wilayaId,
    #         "address1": address1,
    #         "address2": address2,
    #         "detailsLink": detailsLink,
    #         "phoneNumber1": phoneNumber1,
    #         "phoneNumber2": phoneNumber2
        
    #     })

    # return doctors


# Writing Headers to the CSV file
# csvColunms = ["enName" , "arName" , "workTime" , "specialities" , "wilaya" , "wilayaId" , "address1" , "address2" , "detailsLink" , "phoneNumber1" , "phoneNumber2"]
# csvFile = "doctors.csv"
# # try:
# #     with open(csvFile , "w"  , encoding="UTF-8") as file:
# #         writer = csv.DictWriter(file,fieldnames=csvColunms )
# #         writer.writeheader()
# # except IOError:
# #     print("I/O error")

# for speciality in range(30, 160):
#     print ("Scraping Speciality: ", speciality)
#     if speciality == 30 :
#         start = 15
#     for wilaya in range(start, 70):
#         for page in range(1, 10):
#             doctors = scrapeDoctorsInfo(speciality, wilaya, page)
#             if doctors:
                
#                 # Writing to CSV file
#                 try:
#                     with open(csvFile , "a"  , encoding="UTF-8") as file:
#                         writer = csv.DictWriter(file,fieldnames=csvColunms )
#                         for doctor in doctors:
#                             writer.writerow(doctor)
#                 except IOError:
#                     print("I/O error")
#             else: 
#                 break




scrapeDoctorsInfo("","","")





        




