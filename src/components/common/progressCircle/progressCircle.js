import React, { Component } from 'react';
import './progressCircle.css';

class ProgressCircle extends Component {
    constructor(props) {
        super(props);

        const { radius, strokeWidth } = this.props;

        this.normalizedRadius = radius - strokeWidth;
        this.circumference = this.normalizedRadius * 2 * Math.PI;

        this.state = {
            progress: 0
        };
    }

    componentDidMount() {
        const { progress } = this.props;
        setTimeout(function () {
            this.setState({ progress: progress * 10 });
        }.bind(this), 500);
    }

    render() {
        const { radius, strokeWidth, strokeColor, fillColor, progress, fontsize } = this.props;
        const strokeDashoffset = this.circumference - (this.state.progress / 100) * this.circumference;
        return (
            <div>
                <div className="progress-circle-wrap">
                    <svg
                        height={radius * 2}
                        width={radius * 2}
                        className="progress-svg"
                    >
                        <circle
                            stroke={strokeColor}
                            fill={fillColor}
                            strokeDasharray={this.circumference + ' ' + this.circumference}
                            style={{ strokeDashoffset }}
                            strokeWidth={strokeWidth}
                            r={this.normalizedRadius}
                            cx={radius}
                            cy={radius}
                            className="progress-circle"
                        />
                        
                    </svg>
                    <div className="progress-numeric" style={{fontSize: fontsize}}>{progress}</div>
                </div>
            </div>
        )
    }
}

export default ProgressCircle;