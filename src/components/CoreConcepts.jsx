import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data.js';

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map(conceptData => 
                <CoreConcept key={conceptData.title} {...conceptData} />)}
            </ul>
        </section>
    )
}