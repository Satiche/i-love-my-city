exports.home=function(req,res){
  res.render('index',{
    sitename:'I Love My City',
    title:'I Love My City',
    headline:'Sathish - Module 2',
  });
}

exports.city=function(req,res){
    var cityName=req.params.city;
    var title,heading,sitename;
    var imageCount=4;
    

    if(cityName === 'chennai'){
       title="Chennai";
       heading ="Chennai, formerly known as Madras, is the capital of the state of Tamil Nadu and is India's fourth largest city. It is located on the Coromandel Coast of the Bay of Bengal. With an estimated population of 8.9 million (2014), the 400-year-old city is the 31st largest metropolitan area in the world. The city of Madras in 1909 Chennai boasts of a long history from the English East India Company, through the British Raj to its evolution in the late 20th century as a services and manufacturing hub for India. Additionally, the pre-city area of Chennai has a long history within the records of South Indian Empires.";
    }
    else if(cityName === 'pondy'){
       title ="Pondicherry";
       heading="Pondicherry is the capital city and the largest city of the Indian union territory of Puducherry. The city of Pondicherry is situated in Puducherry district of the union territory. It is affectionately known as Pondy, and has been officially known by the alternative name Puducherry in Tamil (New Town) since 2006";
    }
    else if(cityName === 'bengaluru'){
       title="Bengaluru";
       heading ="Bengaluru (previously Bendakaluru) was founded by Kempe Gowda I, who built a mud fort at the site in 1537. It has been developed over the years into an industrial and IT hub in India. Kempe Gowda I (1510–1570), Modern Bengaluru was founded by a feudatory of the Vijayanagara Empire, who built a mud fort in the year 1537. Kempe Gowda also referred to the new town as his 'gandu bhoomi' or 'Land of Heroes'. Within Bangalore, the town was divided into petes (IPA: [pete]) or market. The town had two main streets: Chickkapete Street ran east-west and Doddapete Street ran north-south. Their intersection formed Doddapete square — the heart of then Bangalore. Kempe Gowda's successor, Kempe Gowda II, built temples, tanks including Kempapura and Karanjikere tanks and four watching towers that marked Bengaluru's boundary";
    }
    else if(cityName === 'ooty'){
       title="Ooty";
       heading="Udagamandalam and abbreviated as Udhagai and Ooty is a town and municipality in the Indian state of Tamil Nadu. It is located 80 km north of Coimbatore and is the capital of the Nilgiris district. It is a popular hill station located in the Nilgiri Hills.";
    }
    
    sitename = title +' | I Love My City';
    res.render('city',{
        sitename:sitename,
        title:title,
        headline:heading,
        city:cityName,
        numberOfImages:imageCount});
  }
