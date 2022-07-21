import React from "react"
import styles from './users.module.css'

let Users = (props) => {

    console.log('props.users.length',props.users.length)

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: 'https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg',
                followed: false, fullName: 'Arnold', status: 'Hello', location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 2, photoUrl: 'https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg',
                followed: true, fullName: 'Sasha', status: 'Yoo', location: { city: 'Baku', country: 'Tadzhikistan' }
            },
            {
                id: 3, photoUrl: 'https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg',
                followed: false, fullName: 'Stepan', status: 'Omaewa', location: { city: 'Lodz', country: 'Poland' }
            }
        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => { props.unFollow(u.id) }}>Unfollow</button> :
                            <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users