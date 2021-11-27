const styles = {
  container: {
    margin: window.matchMedia('(max-width: 750px)').matches ? '1rem 0' : '0.5rem 0',
    padding: '0.25rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: window.matchMedia('(max-width: 750px)').matches ? 'start' : 'center'
  },
  username: {
    fontWeight: 600,
    marginRight: '1rem'
  }
}

export default styles
