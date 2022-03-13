function AppHeader(props) {
    return (
        <div>
            {
                (props.show === 'true') ?
                    <p>
                        {props.app}
                    </p> : <p>N/A</p>
            }
        </div>
    );
}



export  default AppHeader;