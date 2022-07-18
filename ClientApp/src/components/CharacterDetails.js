import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class CharacterDetails extends Component {
    static displayName = Home.name;
    constructor(props) {
        super(props);
        this.state = { heroData: [], loading: true };
        this.openDetail = this.openDetail.bind(this);
        //        this.openDetails = this.openDetails.bind(this);
       // this.handleClick = this.handleClick.bind(this);
    }

   

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCharactersTable(this.state.heroData);

        return (
            <div>
                <h1 id="tabelLabel" >Marver Characters</h1>  
                <p>This component demonstrates fetching data from the marvel api (characters).</p>
                {contents}
            </div>
        );
    }

    componentDidMount() {
        this.getDataOfHeroes();
    }

    async getDataOfHeroes() {
        const response = await fetch('marvelcharacters');
        console.log(response);
        const data = await response.json();
        this.setState({ heroData: data, loading: false });
        //  console.log(data);
        console.log(data[0]);
    }

    openDetail(test) {
        console.log("TOOGLEMENU" + test);
    }

    
    
    renderCharactersTable(characters) {
        return (
            <div>
              
                <table className="dataTables">
                    <tbody>
                        {characters.map(character =>
                            <tr key={character.id} className="media_object" >
                                <td className="media_image">
                                    <img className="media_image_avatar" src={character.thumbnail.path + '.' + character.thumbnail.extension} />
                                </td>
                                <td className="media_text_image">
                                    <label className="media_name">{character.name}</label><br />
                                    <label className="media_desc">{character.description}</label><br />
                                    <div className="characters_links">
                                        <a className="media_foot" target="_blank" href={character.urls[1].url}><i className="fa-solid fa-book"></i>{character.urls[1].type}</a>
                                        <a className="media_foot" target="_blank" href={character.urls[0].url}><i className="fa-solid fa-book"></i>{character.urls[0].type}</a>
                                        <a className="media_foot" onClick={() => this.openDetail(character)}>
                                            <i className="fa-solid fa-bars" key={character.id} ></i>
                                            DETALLES
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
