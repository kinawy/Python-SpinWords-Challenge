class RecordAlbums{

        constructor( artistName , albumName , songs , currentSong) {
            this.artistName = artistName
            this.albumName = albumName
            this.songs = songs
            this.currentSong = currentSong   
            }
         next_song() {
             let index = this.songs.indexOf(this.currentSong) // get the index of the current song 
             let n = this.songs.length 
    ​
            if (index == n-1) // if it is the last song 
            return this.songs[0];
            return this.currentSong = this.songs[index + 1];      
            // we can simply solve it in one line using the modulus 
            // return this.songs[(index + 1) % (this.songs.length)]; // this return the song in the index after current 
            // modulus is to move to the first element again when the current is the last song 
            }    
         previous_song(){
           let index = this.songs.indexOf(this.currentSong) // get the index of the current song 
           let n = this.songs.length 
           if (index == 0)
           return this.songs[n - 1];
           return this.songs[index - 1];
    ​
           // again we can simply solve it in one line using the modulus 
           //return this.songs[(index + n - 1) % n]; // this return the song in previous index of current
           // modulus is to move to the last when the current is the first   
            }
            get artistName() {
                return this._artistName;
            }

      set artistName(newName) {
                this._artistName = newName; 
            }
    ​
    ​
    }
    let album =new RecordAlbums( "John Lennon", "Imagine", ["Imagine", "Crippled Inside", "Jealous Guy", "It's So Hard", "I Don't Want to Be a Soldier", "Gimme Some Truth" ,"Oh My Love"],"Oh My Love")
     
    console.log(album.next_song())
    