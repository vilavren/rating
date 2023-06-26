import cn from 'classnames'
import React from 'react'

import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { Rating } from '../Rating/Rating'
import { Textarea } from '../Textarea/Textarea'

import styles from './ReviewForm.module.css'
import { ReviewFormProps } from './ReviewForm.props'

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  return (
    <div className={cn(styles.reviewForm, className)} {...props}>
      <Input />
      <Input />
      <div className={styles.rating}>
        <span>Оценка:</span>
        <Rating rating={0}></Rating>
      </div>
      <Textarea />
      <div className={styles.submit}>
        <Button appearance="primary">Отправить</Button>
        <span>
          * Перед публикацией отзыв пройдет предварительную модерацию и проверку
        </span>
      </div>
    </div>
  )
}
