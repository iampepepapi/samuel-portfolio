import { useEffect, useState } from 'react';
import Script from 'next/script';

declare global {
    interface Window {
        MinecraftAPI: any;
    }
}

interface ServerStatus {
    status: string;
    online: boolean;
    motd: string;
    error: string;
    players: {
        max: number;
        now: number;
    };
    server: {
        name: string;
        protocol: number;
    };
    last_online: string;
    last_updated: string;
    duration: number;
}

export default function ServerStatus() {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);
    const [serverStatus, setServerStatus] = useState<ServerStatus | null>(null);

    useEffect(() => {
        const checkServerStatus = () => {
            if (typeof window.MinecraftAPI !== 'undefined') {
                window.MinecraftAPI.getServerStatus(
                    '51.89.40.34',
                    {
                        port: 25648 // optional, only if you need a custom port
                    },
                    function (err: any, status: ServerStatus) {
                        if (err || status.status !== 'success') {
                            setServerStatus(null);
                            const statusElement =
                                document.querySelector('.server-status');
                            if (statusElement) {
                                statusElement.innerHTML =
                                    'Error loading status';
                            }
                            return;
                        }

                        setServerStatus(status);
                    }
                );
            }
        };

        if (isScriptLoaded) {
            checkServerStatus();
        }
    }, [isScriptLoaded]);

    return (
        <div>
            <div className="server-status">
                My awesome server is currently{' '}
                <span className="server-online">
                    {serverStatus
                        ? serverStatus.online
                            ? 'up'
                            : 'down'
                        : 'loading...'}
                </span>
                !
            </div>
            {serverStatus && serverStatus.status === 'success' && (
                <div>
                    <p>
                        <strong>Status:</strong> {serverStatus.status}
                    </p>
                    <p>
                        <strong>MOTD:</strong> {serverStatus.motd}
                    </p>
                    <p>
                        <strong>Error:</strong> {serverStatus.error}
                    </p>
                    <p>
                        <strong>Players:</strong> {serverStatus.players.now} /{' '}
                        {serverStatus.players.max}
                    </p>
                    <p>
                        <strong>Server Name:</strong> {serverStatus.server.name}
                    </p>
                    <p>
                        <strong>Server Protocol:</strong>{' '}
                        {serverStatus.server.protocol}
                    </p>
                    <p>
                        <strong>Last Online:</strong> {serverStatus.last_online}
                    </p>
                    <p>
                        <strong>Last Updated:</strong>{' '}
                        {serverStatus.last_updated}
                    </p>
                    <p>
                        <strong>Duration:</strong> {serverStatus.duration} ns
                    </p>
                </div>
            )}
            <Script
                src="https://mcapi.us/scripts/minecraft.min.js"
                strategy="afterInteractive"
                onLoad={() => setIsScriptLoaded(true)}
            />
        </div>
    );
}
