import React from 'react';
import axios from 'axios';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

class CareerTable extends React.Component {
    constructor(props) {
        super(props)
    
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            candidateName: '',
            candidateEmail: '',
            candidateContact: '',
            role: '',
            file: null,
            showSuccess: false 
        }
        
    }

    onChangeName(e) {
        this.setState({ candidateName: e.target.value })
      }
      
      onChangeEmail(e) {
        this.setState({ candidateEmail: e.target.value })
      }
      
      onChangePhone(e) {
        this.setState({ candidateContact: e.target.value })
      }
      
      onChangeFile(e) {
        this.setState({ file: e.target.files[0] })
      }

      onSubmit(e) {
        e.preventDefault()
        console.log(this.state.role);
        const formData = new FormData()
        formData.append('candidateName', this.state.candidateName);
        formData.append('candidateEmail', this.state.candidateEmail);
        formData.append('candidateContact', this.state.candidateContact);
        formData.append('file', this.state.file);
        
        const headers = {
            
            'Content-Type': 'multipart/form-data'
          }

        axios.post('https://inet-mern.herokuapp.com/api/applicant', formData, {
            headers : headers
        })
                  .then((res) => {
                      console.log(res.data)
                  }).catch((error) => {
                      console.log(error)
                  });
      
              this.setState({ candidateName: '', candidateEmail: '', candidateContact: '', file: null, showSuccess: true });
              
          }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){            
        
        return(
            <>
            {this.state.showSuccess ? <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                    <div class="modal-body" style={{textAlign: 'center'}}>
                <DoneOutlineIcon /> <br />Thank you for applying to this Role! <br /> Our Team will get back to you!
                </div>
                </div>
                </div> :
            <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-body">
                        
                        <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        >
                        <span aria-hidden="true">×</span>
                        </button>

                        
                        <h2 class="font-weight-bold text-center mb-1" id="applyTitle">
                        Apply For This Job
                        
                        </h2>

                        
                        <br />

                        
                        <form onSubmit={this.onSubmit} enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-12 col-md-6">
                            <div class="form-label-group">
                                <input
                                type="text"
                                class="form-control form-control-flush"
                                name="candidateName"
                                id="Name"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                required
                                />
                                <label for="Name">Name</label>
                            </div>
                            </div>
                            <div class="col-12 col-md-6">
                            <div class="form-label-group">
                                <input
                                type="email"
                                class="form-control form-control-flush"
                                id="Emailid"
                                name="candidateEmail"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                placeholder="Email Address"
                                required
                                />
                                <label for="Emailid">Email Address</label>
                            </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-6">
                            
                            <div class="form-label-group">
                                <input
                                type="number"
                                class="form-control form-control-flush"
                                id="phone"
                                name="candidateContact"
                                value={this.state.phone}
                                onChange={this.onChangePhone}
                                placeholder="Contact Number"
                                required
                                />
                                <label for="phone">Contact Number</label>
                            </div>
                            </div>
                            <div class="col-12 col-md-6">
                            
                            <div class="form-label-group">
                                <input
                                type="file"
                                class="form-control form-control-flush"
                                id="uploadresume"
                                name="file"
                                accept="application/pdf"
                                onChange={this.onChangeFile}
                                placeholder="Upload Resume"
                                required
                                />
                                <label for="uploadresume">Upload Resume</label>
                            </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                            
                            <button class="btn btn-block btn-primary mt-3 lift" type="submit">
                                Apply
                            </button>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
    }
            </>
        )
    }
}

export default CareerTable;