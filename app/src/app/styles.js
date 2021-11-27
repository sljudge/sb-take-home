const styles = {
  main: {
    backgroundColor: '#fff',
    border: '1px solid #e6e6e6',
    borderBottomRightRadius: '3px',
    borderTopRightRadius: '3px',
    maxWidth: '935px',
    margin: window.matchMedia('(max-width: 550px)').matches ? '2.5vh auto' : '16px auto',
    width: window.matchMedia('(max-width: 550px)').matches ? '95vw' : 'calc(100% - 40px)',
    height: window.matchMedia('(max-width: 750px)').matches ? '95vh' : '500px',
    maxHeight: window.matchMedia('(max-width: 750px)').matches ? '95vh' : '500px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: window.matchMedia('(max-width: 750px)').matches ? 'column' : 'row',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    alignItems: 'center'
  },

  image: {
    order: '1',
    flex: window.matchMedia('(max-width: 750px)').matches ? '' : '0 0 60%',
    alignSelf: 'flex-start',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#fafafa',
    overflow: 'hidden'
  },

  text: {
    order: '2',
    flexGrow: '1',
    alignSelf: 'flex-start',
    padding: '1rem 0 0 1rem',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    maxHeight: window.matchMedia('(max-width: 750px)').matches ? '60%' : '100%'
  }
}

export default styles
