import { useEffect } from 'react';
import styles from './Filters.module.css';
import { useStore } from '../../Context/Store';

export const DropMenu = ({ setMenu }) => {

    const { drop_menu, control } = styles;
    const { filters, handleFilters } = useStore();



    useEffect(() => {

        function handleCLick( { target } ) {
            const menu = document.getElementsByClassName(drop_menu)[0];
            if( !menu.contains( target ) ) {
                setMenu( false );
            }
        }

        function handleKeyboard({ key }) {

            if( key === "Escape" ) {
                setMenu( false );
            }
        }

        document.addEventListener("keydown", handleKeyboard);
        document.addEventListener("click", handleCLick);

        return () => {
            document.removeEventListener("keydown", handleKeyboard);
            document.removeEventListener("click", handleCLick);
        }

    }, [ drop_menu, setMenu ]);



    return (

        <ul className = { drop_menu } >
            <li>Filters</li>

            <li>
                <select
                onChange = { ({ target }) => handleFilters({ ...filters, state: target.value }) }
                value = { filters.state }
                className = { control }>
                    <option value = "">State</option>
                    <option value = "Washington">Maharashtra</option>
                    <option value = "California">Jharkhand</option>
                </select>
            </li>

            <li>
                <select
                onChange = { ({ target }) => handleFilters({ ...filters, city: target.value }) }
                value = { filters.city }
                className = { control }>
                    <option value = "">City</option>
                    <option value = "Olympia">Dhanbad</option>
                    <option value = "San Francisco">Dharavi</option>
                    <option value = "Los Angeles">Panvel</option>
                </select>
            </li>
        </ul>
    );
};
