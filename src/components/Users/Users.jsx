import React from 'react'
import styles from './users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom"
import axios from 'axios'

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ''}
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id.toString()}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY':'c5a3d3eb-45ce-4e02-877d-db5e53cfda6e'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0){
                                            props.unFollow(u.id)
                                        }
                                    })
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY':'c5a3d3eb-45ce-4e02-877d-db5e53cfda6e'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0){
                                            props.follow(u.id)
                                        }
                                    })
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{/*{u.location.country}*/}</div>
                        <div>{/*{u.location.city}*/}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users