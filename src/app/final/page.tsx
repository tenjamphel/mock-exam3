
export default function Page() {
    return (
      <>
      <h1 className="text-3xl ml-5">Final Exam</h1>
      <form>
        <label htmlFor="product" className="ml-5">Product Description</label>
        <input type="text" name="product" id="product" className="m-5 text-black bg-blue-300"/>
        <br />
        <label htmlFor="teams">Choose a team:</label>

        <select name="teams" id="teams">
        <option value="manchester city">Manchester City</option>
        <option value="liverpool">Liverpool</option>
        <option value="aesenal">Arsenal</option>
        <option value="chealse">Chealse</option>
        <option value="manchester united">Manchester United</option>
        <option value="nottingham forest">Nottingham Forest</option>
        <option value="fulham">Fulham</option>
        <option value="brentford">Brentford</option>
        <option value="everton">Everton</option>
        <option value="southampton">Southampton</option>
        <option value="west ham united">West Ham United</option>
        <option value="newcastle united">Newcastle United</option>
        </select>

        <br />

        <div className="ml-5 mt-5">
        <input type="checkbox" id="ticket1" name="ticket" value="Home Game" />
        <label htmlFor="ticket1"> I have a home game ticket</label><br />
        <input type="checkbox" id="ticket2" name="ticket2" value="Away Game" />
        <label htmlFor="ticket2"> I have a away game ticket</label><br />
        </div>


        <div className="ml-5 mt-5">
        <input type="radio" id="home jersey" name="fav_jersey" value="Home Jersey" />
        <label htmlFor="home jersey">Home Jersey</label><br />
        <input type="radio" id="away jersey" name="fav_jersey" value="Away Jersey"/>
        <label htmlFor="away jersey">Away Jersey</label><br />
        <input type="radio" id="3rd jersey" name="fav_jersey" value="3rd Jersey"/>
        <label htmlFor="3rd jersey">3rd Jersey</label>
        </div>

        <br />


        <button className="ml-10 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" type="submit">Save</button>
      </form>

      </>
    );
  }
  
