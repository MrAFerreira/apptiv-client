import React from 'react'
import calendary from '../assets/images/calendar_today.svg'
import styled from 'styled-components'

const EventDetailTag = styled.div`
text-align: left;

.cover-image {
    width: auto;
    height: 260px;
};

.section-info {
    margin-left: 15px;
};

div-date {
    text-align: center;
    display: flex;
    align-items: center;

};
.calendary-icon {
    display: inline-block;
    align-items: center;
    justify-content: center;
    
};

.div-p {
    display: inline-block;
    margin-top: 2px;
   
}

.date-info {
    display: inline-block;
    margin-left: 10px;
    margin-bottom: 0;
    margin-top: 0;

}
.time-info {
    margin-top: 0; 
    margin-left: 10px;
    
}



`



function EventDetailsPage({event}) {

   /* const date = event.startDate.substring(8, 10)+"/"+event.startDate.substring(5, 7)+"/"+event.startDate.substring(0, 4) */
    let day = event.startDate.substring(8, 10);
    let month = event.startDate.substring(5, 7);
    let year = event.startDate.substring(0, 4);

    let date = new Date(year, month, day);
    let shortMonth = date.toLocaleString('en-us', { month: 'short' }); 

    let dayOfWeekDig = date.getDay() 

    let dayOfWeekName = date.toLocaleString(
        'default', {weekday: 'long'});




      


  return (
   
    <EventDetailTag> 
        <img src={event.image} alt='event-img' className='cover-image'/>
        <section className="section-info">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <div className="div-date"> 
                <img src={calendary} alt='calendary-icon'className="calendary-icon"/>
                <div className="div-p"> 
                <p className='date-info'>{dayOfWeekName+", "+day+" "+shortMonth+" "+year}</p>
                <p className='time-info'>{event.startDate.substring(11, 13)+":"+event.startDate.substring(14, 16)+"-"+event.startDate.substring(17, 19)+":"+event.startDate.substring(20, 22)}</p>
                </div>
            </div>
            <h4>Location</h4>
        <p>{event.location.address}</p>
        </section>
    </EventDetailTag>
    
  )
}

export default EventDetailsPage