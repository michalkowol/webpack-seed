import * as React from 'react'

const Repo = ({userName, repoName} : {userName: string, repoName: string}) => (
    <div>
        <h2><a href={`https://github.com/${userName}/${repoName}`}>{userName}/{repoName}</a></h2>
    </div>
);

export default Repo;