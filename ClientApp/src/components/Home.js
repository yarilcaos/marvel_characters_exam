import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';


export class Home extends Component {
    static displayName = Home.name;
    constructor(props) {
        super(props);
        this.state = { heroData: [], loading: true, showingDetails:false };
        this.openDetail = this.openDetail.bind(this);
        this.closeDetail = this.closeDetail.bind(this);
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
    closeDetail() {
        this.setState({ showingDetails: false });
    }
    openDetail(characterData) {
        this.setState({ showingDetails: true });
        console.log(characterData);
        const element = (
            <div >
                <div className="detailBody">

                  <div>
                    <a onClick={this.closeDetail}><i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar </a>
                    <h1>{characterData.name}</h1>
                    <p>{characterData.description}</p>
                    </div>
                
                    <div>
                    <img className="big_img" src={characterData.thumbnail.path + '.' + characterData.thumbnail.extension} />
                    </div>
                </div>
                <section>
                    <h2>Comics</h2>
                    {characterData.comics.items.map(comic => <p key={comic.name} className="media_foot" >{comic.name}</p>)}
                    <h2>Series</h2>
                    {characterData.series.items.map(serie => <p key={serie.name} className="media_foot" >{serie.name}</p>)}
                    <h2>Stories</h2>
                    {characterData.stories.items.map(story => <p key={story.name} className="media_foot" >{story.name}</p>)}
                </section>
            </div>
        );
        ReactDOM.render(element, document.getElementById("details"))
    }



    renderCharactersTable(characters) {
        return (
            <div>
                <table className={this.state.showingDetails ? "hidden" :"dataTables"}>
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
                <div id="details" key="details" className={this.state.showingDetails ? "dataTables" : "hidden"}>

                </div>
            </div>
        );
    }
}
