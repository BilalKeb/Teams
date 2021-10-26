render() {
  return (
    <div className="container">
      <h1>Teams</h1>
      <h1 className="text-center">Teams</h1>
      <div className="row">
        {teams.map(element => <Team team={element} />)}
      </div>