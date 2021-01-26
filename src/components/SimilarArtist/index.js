import React from 'react';

class SimilarArtist extends React.Component {
    render() {
        return (
            <>
            {this.props.artists !== undefined && this.props.artists.length !== 0 ? <h1>Similar Artist to {this.props.searchArtist}:</h1> : <></>}
            <div className="similarArtists">
                { this.props.artists ?
                    this.props.artists && this.props.artists.map((item) => {
                        return (
                            <div className="similarArtist" key={item.id} onClick={() => window.location.href = item.link}>
                                <h1>{item.name}</h1>
                            </div>
                        )
                    }) : <></> }
            </div>
            </>
        )
    }
}

export default SimilarArtist;
