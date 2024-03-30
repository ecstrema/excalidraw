# Laser Box

Based on [Excalidraw](https://excalidraw.com), this app connects to a laser box with bluetooth and controls it remotely.

## Development

### Frontend

`
yarn start
`

Doesn't get much simpler than that.

### Backend (bluetooth server)

Connect with ssh to the pi:

```bash
ssh ecstrema@ecstrema-pi
```

You'll then be asked to input the password, and you can work with git to run the bluetooth server.

What I do is I work on my remote machine, then periodically `git push` and `git pull` from the pi, before running it.
