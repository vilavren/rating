'use client' // This is a client component
import cn from 'classnames'
import { useEffect, useState } from 'react'
import style from './Rating.module.css'
import { RatingProps } from './Rating.props'
import StarIcon from './star.svg'

export const Rating = ({
  children,
  isEditable = false,
  rating,
  setRating,
  className,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  )

  useEffect(() => {
    constructRating(rating)
  }, [rating])

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((e: JSX.Element, i: number) => {
      return (
        <StarIcon
          className={cn(style.star, {
            [style.filled]: i < currentRating,
          })}
        />
      )
    })
    setRatingArray(updatedArray)
  }
  return (
    <div {...props}>
      {ratingArray.map((e, i) => (
        <span key={i}> {e}</span>
      ))}
    </div>
  )
}
