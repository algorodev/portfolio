const App = () => (
	<div className="flex flex-col justify-center items-center">
		<h1 className="mt-2 text-3xl font-bold underline">Welcome to Algorodev Portfolio</h1>
		<p className="mt-2">I'm full stack developer.</p>
		<div className="w-1/2">
			<label htmlFor="test-input">
				<span>Username</span>
				<input id="test-input" type="text" className="form-input"/>
			</label>
		</div>
	</div>
)

export default App
