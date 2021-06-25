import React, { useEffect, useState } from 'react'
import { Container, Row, Table, Button } from 'reactstrap'
import parseJwt from '../../helpers/authHelper'
import { useHistory } from "react-router-dom";


const Listings = () => {
    let history = useHistory();
    const token = sessionStorage.getItem('token')
    const user = parseJwt(token).username
    const [listing, setListing] = useState([])
    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        history.push("/login")
    }
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:4000/contact_form/entries', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json()
            setListing(data)
        }
        getData()
    }, [token])
    return (
        <main className="containerMainLong">
            <div className="contentMainLong">
            <Row>
                <h1 className="userHeader"><strong>Listings for user: {user}</strong></h1>
                <Button onClick={logout} className="logoutButton" color="warning"><strong>Logout</strong></Button>
            </Row>
            <hr className="mainHr" />
            <Table className="listingTable" responsive>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {listing.length === 0 &&
                        <tr><td colSpan="4" className="text-center"><i>No listings found</i></td></tr>
                    }
                    {listing.length > 0 &&
                        listing.map(entry => <tr><td>{entry.id}</td><td>{entry.name}</td><td>{entry.phoneNumber}</td><td>{entry.email}</td></tr>)
                    }
                </tbody>
            </Table>
        <Row className="my-5">
            
        </Row>
        </div>
        </main>
    )
}

export default Listings