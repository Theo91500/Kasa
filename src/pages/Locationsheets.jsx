import { Carousel } from '../components/LocationSheets/Carousel'
import dataJson from '../../public/data/data.json'
import { useParams } from 'react-router-dom';
import { InfoLocations } from '../components/LocationSheets/InfoLocations';
import { Collapse } from '../components/Collapse/Collapse';
import Error from './Error';

function LocationSheets() {
    const { id } = useParams();
    const card = dataJson.find((item) => item.id === id);    

    if (!card) {
        return <Error/>;
    }

    console.log(card);
    


    return <main className="LocationSheets">
        <Carousel card={card}/>
        <InfoLocations card={card} rating={card.rating}/>
        <div className='locationCollapse'>
            <Collapse title="Description" description={card.description}/>
            
                <Collapse title="Equipements" description={card.equipments.map((data, index) => (
                    <ul>
                        <li key={index}>{data}</li>
                    </ul>
                ))} />
            
        </div>
    </main>
}

export default LocationSheets