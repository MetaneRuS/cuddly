import React from 'react';

class Album extends React.Component {
    render() {
        return (
            <div className="albums">
                {this.props.albums ?
                    this.props.albums && this.props.albums.map(item => {
                        return (
                            <div key={item.id} className="album" onClick={() => window.location.href = item.link}>
                                <img src={item.cover_xl} alt={item.title} />
                                <h1>{item.title}</h1>
                                <h5>{item.release_date}</h5>
                            </div>
                        )
                    }) : <>No results</>}
            </div>
        )
    }
}

export default Album;