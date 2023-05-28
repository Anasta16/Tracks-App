import React, { useContext } from 'react';
import { Button, Input, Text } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {

    const { state: { name, recording, locations }, 
        startRecording, 
        stopRecording, 
        changeName 
    } = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

    return (
        <>
            <Spacer>
                <Input 
                    value={name}
                    onChangeText={changeName}
                    placeholder="Enter name" 
                />
            </Spacer>
            <Spacer>
                {recording ? (
                    <Button title={<Text>Stop</Text>} onPress={stopRecording} />
                ) : (
                    <Button title={<Text>Start Recording</Text>} onPress={startRecording} />
                )}
            </Spacer>
            <Spacer>
                {!recording && locations.length ? (
                    <Button title={<Text>Save Recording</Text>} onPress={saveTrack} />
                ) : null}
            </Spacer>
        </>
    );
};

export default TrackForm;
