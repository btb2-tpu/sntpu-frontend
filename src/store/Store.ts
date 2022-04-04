import {makeAutoObservable} from 'mobx'

import {data} from '../components/main/MyAccount'
import {instance} from "../components/auth/authModule";


class Store {
    downloadedData: data = {
        firstName: null,
        lastName: null,
        middleName: null,
        description: null,
        group: null,
        school: null,
        avatarUUID: null,
        education: null,
        dormitory: null,
        room: null,
        floor: null,
        uuid: null
    }

    constructor() {
        makeAutoObservable(this)
    }

    downloadData () {
        instance.get('/user')
            .then((response) => {
                this.downloadedData = response.data
                console.log(response.data)
            })
    }
}

export default new Store()
