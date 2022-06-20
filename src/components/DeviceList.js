import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import DeviceItem from "./deviceItem";

const DeviceList = observer(() => {
    const {device} = useContext(Context);

    return (
        <div className="items__list">
            {device.devices.map(device =>
                <DeviceItem key={device.id} device={device}/>
            )}
        </div>
    );
});

export default DeviceList;
