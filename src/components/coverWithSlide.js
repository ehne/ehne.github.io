import React, { Component } from 'react'
import TransitionLink, { TransitionPortal } from 'gatsby-plugin-transition-link'
import gsap from 'gsap'



export default class CoverWithSlide extends Component {
	constructor(props) {
		super(props)

		this.horizontal = this.horizontal.bind(this)
		this.vertical = this.vertical.bind(this)

		this.cover = React.createRef()
		this.borderColour = "linear-gradient(90deg, #ffc53f 0%,#ffc53f 100%) "
		this.rainbow = "linear-gradient(90deg, rgb(243, 115, 97) 0%, rgb(243, 115, 97) 16.6%, rgb(248, 155, 60) 16.6%, rgb(248, 155, 60) 33.2%, rgb(252, 223, 92) 33.2%, rgb(252, 223, 92) 49.36%, rgb(163, 187, 74) 49.36%, rgb(163, 187, 74) 65.96%, rgb(91, 199, 190) 65.96%, rgb(91, 199, 190) 82.56%, rgb(106, 80, 149) 82.56%, rgb(106, 80, 149) 100%)"
		var date = new Date().getDate();
		var month = new Date().getMonth() + 1; //Current Month
		if (date == 17 && month == 5){
			this.borderColour=this.rainbow
		}
	}
	

	horizontal = ({ node, props: { length: seconds }, direction }) => {
		const directionTo = direction === 'left' ? '-100%' : '100%'
		const directionFrom = direction === 'left' ? '100%' : '-100%'

		const wait = seconds / 6
		const half = (seconds - wait) / 2

		return gsap.timeline()
			.set(this.cover, { y: 0, x: directionFrom, display: 'block' })
			.to(this.cover, {
				x: '0%',
				ease: "power1.easeInOut",
				duration: half,
			})
			.set(node, { opacity: 0 })
			.to(
				this.cover, {
					x: directionTo,
					ease: "power1.easeInOut",
					duration: half,
				},
				`+=${wait}`,
			)
	}

	vertical = ({ node, props: { length: seconds }, direction }) => {
		const directionTo = direction === 'up' ? '-100%' : '100%'
		const directionFrom = direction === 'up' ? '100%' : '-100%'

		const wait = seconds / 6
		const half = (seconds - wait) / 2

		return gsap.timeline()
			.set(this.cover, { y: directionFrom })
			.to(this.cover, {
				y: '0%',
				ease: "power1.easeInOut",
				duration: half,
			})
			.set(node, { opacity: 0 })
			.to(
				this.cover, {
					y: directionTo,
					ease: "power1.easeIn",
					duration: half,
				},
				`+=${wait}`,
			)
	}

	moveInDirection = ({ props, direction, node }) => {
		if (direction === 'left' || direction === 'right')
			return this.horizontal({ props, direction, node })

		return this.vertical({ props, direction, node })
    }
    getDirection = from => {
		switch (from) {
			case 'left':
				return { xPercent: -5 }
			case 'right':
				return { xPercent: 5 }
			case 'top':
				return { yPercent: -5 }
			case 'bottom':
				return { yPercent: 5 }
			default:
				return {}
		}
	}
    slideIn = ({ length }, node, from) => {
		gsap.from(node, length, {
			...this.getDirection(from),
			ease: 'power1.easeOut',
		})
    }
    
	render() {
		const direction = this.props.direction || 'left'
		const length = this.props.duration || 1
		const {
			exit: removedExit,
			entry: removedEntry,
			cover: removedProp,
			...props
		} = this.props
		return (
			<>
				<TransitionLink
					exit={{
						length: length,
						trigger: ({ exit, node }) =>
							this.moveInDirection({
								props: exit,
								node,
								direction,
							}),
					}}
					entry={{
                        delay: length /2,
                        length: length/1.75,
                        trigger: ({ entry, node }) =>
							this.slideIn(entry, node, (direction==="left")?"right":"left"  ),
                        
					}}
					{...props}>
					{this.props.children}
				</TransitionLink>

				<TransitionPortal>
					<div
						ref={n => (this.cover = n)}
						style={{
							position: 'fixed',
							backgroundImage: this.props.bg || this.borderColour,
							top: 0,
							left: 0,
							width: '100vw',
							height: '100vh',
							transform: 'translateY(100%)',
						}}
					/>
				</TransitionPortal>
			</>
		)
	}
}